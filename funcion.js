async function obtenerInfoUsuarioGitHub() {
    const usuario = document.getElementById('username').value;
    const url = `https://api.github.com/users/octocat`;
    
    try {
        const respuesta = await fetch(url);
        
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener la información del usuario');
        }

        const datos = await respuesta.json();

        document.getElementById('name').textContent = datos.name || 'N/A';
        document.getElementById('followers').textContent = datos.followers || 'N/A';
        document.getElementById('public-repos').textContent = datos.public_repos || 'N/A';
    } catch (error) {
        console.error('Error:', error.message);
        alert('Error: ' + error.message);
    }
}