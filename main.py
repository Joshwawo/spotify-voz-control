import speech_recognition as sr
import pyttsx3
from helpers import Tree,saludar,open_youtube,open_google,play,pause,previous,next
from helpers import saludar

# Inicializar el árbol de comandos
tree = Tree()

# Aquí se insertan los comandos y las funciones que se ejecutarán
# tree.insert("abre youtube", open_youtube)
# tree.insert("abre google", open_google)
# tree.insert("saludar", saludar)

#Creo que lo voy a dejar en ingles mejor, porque en español no me entiende bien 😔😔😔

tree.insert("open youtube", open_youtube)
tree.insert("open google", open_google)
tree.insert("hi", saludar)
tree.insert("play", play)
tree.insert("pause", pause)
tree.insert("next", next)
tree.insert("previous", previous)


# Inicializar el motor de síntesis de voz
engine = pyttsx3.init()

# Inicializar el reconocedor de voz
r = sr.Recognizer()

# Iniciar el bucle infinito talvez en un futuro no sea infinito
while True:
    # Escuchar al usuario a través del micrófono
    with sr.Microphone() as source:
        print("Escuchando...")
        audio = r.listen(source)

    # Intentar reconocer el discurso del usuario
    try:
        # Convertir el audio a texto y imprimir el resultado
        text = r.recognize_google(audio, language="en-US")
        print(f"Has dicho: {text}")

        # Si el usuario dice "hey josh", escuchar la siguiente instrucción
        if "hello" in text.lower():
            print("Sí, ¿qué necesitas?")
            with sr.Microphone() as source:
                audio = r.listen(source)
            command = r.recognize_google(audio, language="en-US")
            print(f"Has dicho: {command}")

            function = tree.search(command.lower())
            if function:
                function()
            else:
                print("No se encontró el comando")

    # Si hay algún error al reconocer la voz del usuario, imprimir el error
    except Exception as e:
        print(f"Error: {e}")