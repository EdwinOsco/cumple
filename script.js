function showHint() {
    const hint = document.getElementById('hint');
    hint.style.display = 'block'; // Muestra la imagen del solecito
    setTimeout(() => {
      hint.style.display = 'none'; // Oculta después de 5 segundos
    }, 5000);
  }

  function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === 'MIRIAMNAYDE' && password === 'SOLECITO') {
      alert('¡Acceso concedido!');
      window.location.href = 'pagina1.html'; // Redirige a la siguiente página
      return false;
    } else {
      alert('Nombre o apodo incorrecto. Inténtalo de nuevo.');
      return false;
    }
  }

document.getElementById("abrirCarta").addEventListener("click", function() {
    var mensaje = document.getElementById("mensaje");
    var abrirCarta = document.getElementById("abrirCarta");
    var nuevoBoton = document.getElementById("nuevoBoton");

    mensaje.style.display = "block";
    abrirCarta.style.display = "none"; // Ocultar botón de abrir carta
    nuevoBoton.style.display = "block"; // Mostrar el nuevo botón
});

document.getElementById("nuevoBoton").addEventListener("click", function() {
    window.location.href = "pagina2.html"; // Cambia esto por la URL de tu siguiente página
});

function verificarRespuesta(respuesta) {
    var respuestaCorrecta = "Azul"; // Cambia esto por la respuesta correcta

    if (respuesta === respuestaCorrecta) {
        document.getElementById("resultado").innerHTML = "Que bien Acertaste!!!🎉";
        setTimeout(function() {
            window.location.href = "pagina3.html"; // Redirige a la nueva página
        }, 500); // Espera 2 segundos antes de cambiar de página
    } else {
        document.getElementById("resultado").innerHTML = "Oh Oh intentalo de nuevo... 😢";
    }
}

window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;

    ctx.translate(canvas.width / 2, canvas.height / 2); // Centramos el dibujo

    let t = 0; // Tiempo de la animación

    function drawHeart() {
        ctx.beginPath();
        for (let i = 0; i < t; i += 0.02) {
            let x = 16 * Math.sin(i) ** 3;
            let y = -(13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i));

            ctx.lineTo(x * 10, y * 10);
        }
        ctx.strokeStyle = "#e91e63";
        ctx.lineWidth = 3;
        ctx.stroke();

        if (t < Math.PI * 2) {
            t += 0.02;
            requestAnimationFrame(drawHeart);
        } else {
            document.getElementById("mensaje").style.display = "block";
            document.getElementById("playButton").style.display = "block";
        }
    }

    drawHeart();

    document.getElementById("playButton").addEventListener("click", function() {
        document.getElementById("audio").play();
    });
};
