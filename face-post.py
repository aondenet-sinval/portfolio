import pyautogui
import time

#CAMPO COM EXPLICAÇÕES DE CÓDIGO
time.sleep(2) #tempo de espera
#posicionando em nova mensagem
pyautogui.click(451, 416, interval=1) #CLICANDO EM CRIAR HISTÓRIA - TELA NORMAL NO CHROME
pyautogui.click(739, 442, interval=1)#CLICANDO EM CRIAR HISTÓRIA COM FOTOS
time.sleep(5) #tempo de espera
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
pyautogui.click(229, 724, interval=1) #CLICANDO EM PARTILHAR NA HISTÓRIA
