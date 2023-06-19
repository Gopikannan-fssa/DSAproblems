num =int(input("enter a number:"))
for i in range(2,num):
    if num% i==0:
        print("NUM IS NOT A PRIME")
        break
    else:
        print("NUM IS PRIME")
        break