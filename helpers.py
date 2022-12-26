import webbrowser


def saludar():
    print("Hola jorge mucho gusto en conocerte")


class Node:
    def __init__(self, key, function):
        self.key = key
        self.function = function
        self.left = None
        self.right = None


class Tree:
    def __init__(self):
        self.root = None

    def insert(self, key, function):
        self.root = self._insert(self.root, key, function)

    def _insert(self, node, key, function):
        if not node:
            return Node(key, function)
        if key < node.key:
            node.left = self._insert(node.left, key, function)
        else:
            node.right = self._insert(node.right, key, function)
        return node

    def search(self, key):
        return self._search(self.root, key)

    def _search(self, node, key):
        if not node:
            return None
        if key == node.key:
            return node.function
        if key < node.key:
            return self._search(node.left, key)
        else:
            return self._search(node.right, key)


def open_youtube():
    webbrowser.open("https://www.youtube.com/")


def open_google():
    webbrowser.open("https://www.google.com/")


def open_backend():
    webbrowser.open("https://api-projects.up.railway.app/")


def subir_volumen():
    print("Subiendo volumen...")

def play():
    webbrowser.open("http://localhost:3004/play")
    print("Reproduciendo...")

def pause():
    webbrowser.open("http://localhost:3004/pause")
    print("Pausando...")

def next():
    webbrowser.open("http://localhost:3004/next")
    print("Siguiente...")

def previous():
    webbrowser.open("http://localhost:3004/previous")
    print("Anterior...")


