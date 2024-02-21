async function fetchFazendas() {
    const response = await fetch('/fazendas'); 
    const data = await response.json();
    return data;
  }