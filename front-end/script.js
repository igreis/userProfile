const backContent = document.querySelector('.back-content');
const elementoFlipped = document.querySelector('.flipped');
const userProfile = document.querySelector('.user-profile');
const frontContent = document.querySelector('.front-content');
const form = document.querySelector('.form-content');
const biografia = document.querySelector('#biografia')
const biografiaText = document.querySelector('#biografiaText');
const bioForm = document.querySelector('#bioForm');
const formulario = document.querySelector('.data')
const strongs = document.querySelectorAll('strong')
const bio = document.querySelector('.bio');
const containerMsg = document.querySelector('.container-msg')
const previewImage = document.querySelector('#previewImage')
let dados;
let id;


exibir();
exibirImg();

function exibir() {
  fetch('http://localhost:3000/atualizar', {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao processar a solicitação: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      id = data.id;
      const keys = ['nome', 'idade', 'rua', 'bairro', 'estado']
      let i = 0;
      for (let chave of keys) {
        strongs[i].innerText = data[chave]
        i++;
      }
      bio.innerText = data.biografia
      
    })
    .catch(error => {
      console.error('Erro:', error);
    });
}



function exibirImg() {
  previewImage.src = 'http://localhost:3000/uploads/imagem.jpg';
  previewImage.style.display = 'block'; // Exibir a imagem
}



function flipFront() {
  userProfile.classList.add('flipped');

  if (userProfile.classList.contains('flipped')) {
    frontContent.style.visibility = 'hidden';
    backContent.style.display = 'block';
    backContent.style.transform = 'rotateY(180deg)';
  }
}

function flipBack() {
  userProfile.classList.remove('flipped');

  backContent.style.display = 'none';
  frontContent.style.visibility = 'visible';
}

function flipForm() {

  form.classList.toggle('flipped');

  if (form.classList.contains('flipped')) {
    form.style.visibility = 'hidden';
    biografia.style.display = 'block';
    biografiaText.style.display = 'block';
    bioForm.innerText = 'Dados'
  } else {
    form.style.visibility = 'visible';
    biografia.style.display = 'none'
    biografiaText.style.display = 'none'
    bioForm.innerText = 'Biografia'
  }
}

function exibirMsg(data) {
  if (data.errors && data.errors.length > 0) {
    containerMsg.innerHTML = '';
    data.errors.forEach(error => {
      const errorElement = document.createElement('p');
      errorElement.textContent = error;
      containerMsg.appendChild(errorElement);
    });
  } else {
    containerMsg.innerHTML = ''
    const errorElement = document.createElement('p');
    if (id) {
      errorElement.textContent = 'Perfil atualizado com sucesso'
    } else {
      errorElement.textContent = 'Perfil criado com sucesso'
    }

    containerMsg.appendChild(errorElement)
  }
}


formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(formulario);
  const jsonObject = {};
  for (const [key, value] of formData.entries()) {
    if (value != '') {
      jsonObject[key] = value;
    }
  }
  if (id == null) {
    fetch('http://localhost:3000/atualizar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonObject)
    })
      .then(response => response.json())
      .then(data => {
        exibirMsg(data);
        exibir();
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  } else {
    fetch(`http://localhost:3000/atualizar/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonObject)
    })
      .then(response => response.json())
      .then(data => {
        exibirMsg(data)
        exibir();
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }

  const formDataImage = new FormData()
  const imageFile = document.getElementById('exampleInputImagem').files[0];
  if (imageFile) {
    formDataImage.append('imagem', imageFile);

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formDataImage
    })
      .then(response => response.json())
      .then(data => {
        console.log('Imagem enviada com sucesso:', data.url);
        // Lógica para exibir a imagem no front-end
      })
      .catch(error => {
        console.error('Erro ao enviar a imagem:', error);
      });
  }

  exibirImg();
})


