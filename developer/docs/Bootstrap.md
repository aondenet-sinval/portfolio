##Bootstrap 4
#Container:

Classe .container x .container-fluid:
A classe .container fornece um contêiner responsivo de largura fixa
A classe .container-fluid fornece um contêiner de largura total, abrangendo toda a largura da janela de visualização 

#Container Padding:

Por padrão, os contêineres têm 15 px de preenchimento esquerdo e direito, sem preenchimento superior ou inferior. Portanto, costumamos usar utilitários de espaçamento, como preenchimento extra e margens para torná-los ainda melhores. Por exemplo, .pt-3 significa "adicionar um preenchimento superior de 16 px":

 <div class="container pt-3"></div> 
 
#Responsive Containers:

Você também pode usar as classes .container-sm | md | lg | xl para criar contêineres responsivos.

A largura máxima do contêiner mudará em diferentes tamanhos de tela / janelas de visualização:
Class 	        Extra small - Small   - Medium  -  Large      - Extra large
                <576px      - ≥576px  - ≥768px  -  ≥992px     -	≥1200px 
.container-sm 	100% 	    - 540px   -	720px 	-  960px      - 1140px
.container-md 	100% 	    - 100%    - 720px 	-  960px      -	1140px
.container-lg 	100% 	    - 100%    - 100% 	-  960px      - 1140px
.container-xl 	100% 	    - 100%    - 100% 	-  100%       - 1140px
**≥: sinal de maior ou igual**
A classe container-sm aplicada num dispositivo com tela menor que 576px ocupará 100% da tela, mas nma tela ≥768 (maior o igual 768px) ocupará apenas 720px da tela.

The Bootstrap 4 grid system has five classes:

    .col- (extra small devices - screen width less than 576px)
    .col-sm- (small devices - screen width equal to or greater than 576px)
    .col-md- (medium devices - screen width equal to or greater than 768px)
    .col-lg- (large devices - screen width equal to or greater than 992px)
    .col-xl- (xlarge devices - screen width equal to or greater than 1200px)

#Text/Typografy:

Tamanho da fonte padrão 16px e espaçamento padrão de 1.5 (1rem).

