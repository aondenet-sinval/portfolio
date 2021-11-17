       window.onload = function createHeading() {

         // create a couple of elements in an otherwise empty HTML page
         var heading = document.createElement("h1");
         var heading_text = document.createTextNode("Big Head!");
         heading.appendChild(heading_text);
         document.body.appendChild(heading);
      }
      
       function createTr() {
				var tabela = document.getElementById("table");
				var atributosTabela = tabela.attributes; // interface Node/Element
				for (var i = 0; i < atributosTabela.length; i++) {
				  // interface HTMLTableElement: atributo border
				  if (atributosTabela[i].nodeName.toLowerCase() == "border")
				    tabela.border = "1";
				}
				// interface HTMLTableElement: atributo summary
				table.summary = "nota: aumento de borda";
      }
      
      const x = document.getElementById("par");
		const y = x.getElementsByTagName("strong");
		
		document.getElementById("str").innerHTML = "'BOM DIA'";
		
		function alterCores() {
			document.getElementById("idgrupo").style.backgroundColor = "green";
			document.getElementById("idgrupo").style.color = "violet";
			document.getElementById("idgrupo").style.fontSize = "24px";
		}
