def questao1():
    
    total = 0
    desconto = 0
    print('Bem vindo Henrique Abade')
    valor = int(input("Digite o valor do produto: "))
    quantidade = int(input("Digite a quantidade do produto: "))
    total = valor * quantidade
    if total < 2500:
        desconto = 0
    elif total >= 2500 and total < 6000:
        desconto = 4

    elif total >= 6000 and total < 10000:
        desconto = 7
    
    else:
        desconto = 11
    
    totalSem = total
    totalCom = total - (total * desconto / 100)
    print(f'O valor sem desconto é de {totalSem} e com desconto é de {totalCom}')

questao1()