let saldoVitorias = calcularVitorias(123,5)

function calcularVitorias(vitorias, derrotas){
	return vitorias - derrotas
}

function calcularDeNivel() {

	switch (true) {
    	case saldoVitorias <= 10:
        	console.log("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nível de Ferro")
        	break

    	case saldoVitorias > 11 && saldoVitorias <= 20:
        	console.log("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nível de Bronze")
        	break

    	case saldoVitorias > 21 && saldoVitorias <= 50:
        	console.log("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nível de Prata")
        	break
    
    	case saldoVitorias > 51 && saldoVitorias <= 80:
        	console.log("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nível de Ouro")
        	break
        
    	case saldoVitorias > 81 && saldoVitorias <= 90:
        	console.log("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nível de Diamante")
        	break
    
    	case saldoVitorias > 91 && saldoVitorias <= 100:
        	console.log("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nível Lendário")
        	break

    	case saldoVitorias >= 101:
        	console.log("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nível Imortal")
        	break
        
	}
    
}

calcularDeNivel(saldoVitorias);