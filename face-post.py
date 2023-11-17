import pyautogui
import time

#CAMPO COM EXPLICAÇÕES DE CÓDIGO
time.sleep(2) #tempo de espera
#posicionando em nova mensagem
pyautogui.click(451, 416, interval=1) #CLICANDO EM CRIAR HISTÓRIA - TELA NORMAL NO CHROME
pyautogui.click(739, 442, interval=1)#CLICANDO EM CRIAR HISTÓRIA COM FOTOS
time.sleep(5) #tempo de espera
  
#posicionando em digitar numero de destino
pyautogui.click(60, 393, interval=1) #CLICANDO NA PASTA FOTOS-AUTO
time.sleep(5)
pyautogui.click(222, 139, interval=1) #CLICANDO NA PRIMEIRA FOTO NA PASTA FOTOS-AUTO
time.sleep(5)
pyautogui.click(1318, 41, interval=1) #CLICANDO EM SELECIONAR
time.sleep(5)
pyautogui.click(121, 393, interval=1) #CLICANDO EM ADICIONAR TEXTO
time.sleep(5)
pyautogui.write('insira texto n', interval=0.25)
pyautogui.hotkey('^')
pyautogui.write('ao deixe de acentuar', interval=0.25)
#pyautogui.click(229, 724, interval=1) #CLICANDO EM PARTILHAR NA HISTÓRIA
#pyautogui.click(180, 161, interval=1) #CLICANDO NA SEGUNDA FOTO NA PASTA FOTOS-AUTO
#pyautogui.click(1318, 41, interval=1) #CLICANDO EM SELECIONAR
#Digitando destino da mensagem
#pyautogui.write('7599155-1200', interval=0.5)
#pyautogui.hotkey('return')
#time.sleep(10) #tempo de espera para inserir mensagem
#posicionando em digitar mensagem
#pyautogui.click(580, 668, interval=1)
#pyautogui.write('pesquise https://trabalhoeresumoescolar.blogspot.com e www.aondenet.com  ', interval=0.25) #mensagem
#pyautogui.hotkey('return')
#time.sleep(5)
##CAMPO SEM EXPLICAÇÕES DE CÓDIGO ABAIXO
