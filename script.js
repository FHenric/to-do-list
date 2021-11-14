$(".texto").on("keyup", function(e) { 
    //13 = Botão Enter
    if(e.keyCode == 13 && $('.texto').val() != "") {

        //Criando a div
        var task = $("<div class='task'></div>").text($(".texto").val());
        
        //Função de deletar a div com um fade lento
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
              p.remove();
            });
          });

          
          var done = $("<i class='fas fa-check'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
              	$(".comp").append(p);
              	p.fadeIn();
            });
			
            $(this).remove();
          });

        //incluindo os icones dentro do elemento de tarefa
        task.append(del,done);

        console.log(task)
        //Jogando a div criada  dentro do "incompleto"
        $(".notcomp").append(task);

        //limpando o campo de input
        $(".texto").val("");
    } 
    
 });