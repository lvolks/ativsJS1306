
    function ex3(){
        var radio = document.getElementsByName("cor");
        console.log(radio);

            for(i = 0; i < radio.length; i++){

            if(radio[i].checked){
                document.getElementById("texto").style.color = radio[i].value;
            }   
        }
        }


    function ex4(){
        
       
            
            // Acrescenta um novo item de lista
            var elemento = document.createElement("li");
            var texto = document.createTextNode(document.getElementById("tarefa").value);

            elemento.appendChild(texto);

            var lista = document.getElementsByTagName("ul")[0];

            lista.appendChild(elemento);

            document.getElementById("tarefa").value = "";
            document.getElementById("tarefa").focus();
    

    }

    function ex4_2(){
        var lista = document.getElementsByTagName("ul")[0];
        lista.childNodes[document.getElementById("destacar").value].style.color = "red";
    }

    function ex4_3(){
        var lista = document.getElementsByTagName("ul")[0];
        lista.childNodes[document.getElementById("remover").value].remove();
    }

    function ex5(){
        var elemento = document.createElement("option");
        elemento.innerHTML = document.getElementById("texto").value;
        document.getElementById("lista").appendChild(elemento);
    }
    
