from flask.ext.script import Manager

from tintinn import app

@manager.command
def runserver():
    app.run()

if __name__ == "__main__":
    manager.run()
