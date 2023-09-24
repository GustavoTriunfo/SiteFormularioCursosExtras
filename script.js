fetch('URL_DO_SEU_API/cursos')
    .then(response => response.json())
    .then(cursos => {
        const listaCursos = document.querySelector('ul');
        cursos.forEach(curso => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="formulario_inscricao.html?codigo=${curso.codigo}">${curso.nome}</a>`;
            listaCursos.appendChild(listItem);
        });
    })
    .catch(error => console.error('Erro ao buscar cursos:', error));
