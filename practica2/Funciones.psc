Funcion retonarResta  <-Restar ( num1 , num2 )
	
	retonarResta = num1 - num2
	
Fin Funcion

Funcion retonarSuma <- sumar ( num1 , num2 )
	
	retonarSuma = num1 + num2
	
Fin Funcion



Algoritmo Funciones
	
	Definir numero1 , numero2, opciones como numeros
	
	Escribir "Por favor ingrese el primer numero"
	Leer numero1
	
	
	Escribir "Por favor ingrese el segundo numero"
	Leer numero2 
	
	Escribir  "Por favor ingrese una opcion"
	Escribir  " 1-Sumar o 2-Restar"
	Leer opciones
	
	Si opciones = 1 Entonces
		Escribir "Su suma es" , " ", Sumar(numero1 , numero2)
	FinSi
	
	Si opciones = 2 Entonces
		Escribir "Su resta es" , " ", Restar(numero1 , numero2)
	FinSi
	
	
	
FinAlgoritmo
