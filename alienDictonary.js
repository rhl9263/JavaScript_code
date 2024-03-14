function addEdge(adj, u, v) {
    adj[u.charCodeAt(0) - 'a'.charCodeAt(0)].push(v.charCodeAt(0) - 'a'.charCodeAt(0));
  }
   
  function dfs(adj, col, curr, isCyclic) {
    col[curr] = 1;
   
    for (let i = 0; i < adj[curr].length; i++) {
      const x = adj[curr][i];
      if (col[x] === 1) {
        isCyclic[0] = true;
        return;
      } else if (col[x] === 0) {
        dfs(adj, col, x, isCyclic);
      }
    }
   
    col[curr] = 2;
  }
   
  function checkCycle(adj, col, k) {
    const isCyclic = [false];
    for (let i = 0; i < k; i++) {
      if (col[i] === 0) {
        dfs(adj, col, i, isCyclic);
      }
    }
    return isCyclic[0];
  }
   
  function topologicalSortUtil(adj, u, visited, st) {
    visited[u] = true;
    for (let i = 0; i < adj[u].length; i++) {
      const v = adj[u][i];
      if (!visited[v]) {
        topologicalSortUtil(adj, v, visited, st);
      }
    }
    st.push(u);
  }
   
  function topologicalSort(adj, V) {
    const visited = new Array(V).fill(false);
    const st = [];
   
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        topologicalSortUtil(adj, i, visited, st);
      }
    }
   
    while (st.length > 0) {
      process.stdout.write(String.fromCharCode(st.pop() + 'a'.charCodeAt(0)) + " ");
    }
  }
   
  function printOrder(words) {
    const frq = new Array(26).fill(0);
    let k = 0;
   
    for (let i = 0; i < words.length; i++) {
      const s = words[i];
      for (let j = 0; j < s.length; j++) {
        frq[s.charCodeAt(j) - 'a'.charCodeAt(0)]++;
        if (frq[s.charCodeAt(j) - 'a'.charCodeAt(0)] === 1) {
          k++;
        }
      }
    }
   
    const adj = new Array(k).fill(null).map(() => []);
     
    for (let i = 0; i < words.length - 1; i++) {
      const word1 = words[i];
      const word2 = words[i + 1];
   
      let j = 0;
      while (j < word1.length && j < word2.length) {
        if (word1[j] !== word2[j]) {
          addEdge(adj, word1[j], word2[j]);
          break;
        }
        j++;
      }
    }
   
    const col = new Array(k).fill(0);
    if (checkCycle(adj, col, k)) {
      console.log("Valid Order is not possible");
      return;
    }
   
    topologicalSort(adj, k);
  }
   
  const words = ["caa", "aaa", "aab"];
  printOrder(words);