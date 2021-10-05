name = 'zack'
devices = ['laptop', 'smartphone', 'tablet']

def display(arg):
    print(f'arg = {arg}')

if (__name__ == '__main__'):
  print('Executing as standalone script')
  print(name)
  print(devices)
  print(display('Good Morning'))