    // Definicion de variables para ingreso de nombre, columnas, filas utilizando el metodo prompt //
    var nombre = prompt("Estimado/a, Ingrese su nombre")
    var numeroFilas = prompt(" Bienvenido " + nombre + " ingrese la cantidad de filas");
    var numeroColumnas = prompt("Ahora, ingrese la cantidad de columnas")
    
    // Definicion de variables para posición, limite de filas/columnas, contador y total de casilleros // 
    var posicion = 0;
    var limiteFila = numeroFilas-1;
    var limiteColumna = numeroColumnas-1;
    var contador = 1;
    var total = numeroColumnas*numeroFilas

    // Nombre de la matriz // 
    var matriz = new Array(numeroFilas);

    for(x=0; x<=numeroFilas; x++){
        matriz[x] = new Array(numeroFilas)
    }

    for(x=0; x<numeroFilas; x++){
        for(y=0; y<numeroColumnas; y++){
            matriz[x][y] = 0;
        }
    }

    // Comienzo del Ciclo While //
    while(contador <= total){
        
        // Primer fila, es decir, de izquierda a derecha // 
        if(contador<= total){
            for(x=posicion; x<=limiteColumna; x++){
                matriz[posicion][x] = contador;
                contador++
            }
        }
        
        // Primer columna, es decir, de arriba hacia abajo //
        if(contador<= total){
            for(y = posicion+1; y <= limiteFila; y++){
                matriz[y][limiteColumna] = contador;
                contador++;
            }
        }
        
        // Segunda fila, es decir, de derecha a izquierda // 
        if(contador<= total){
          for(x= limiteColumna-1; x>= posicion; x--){
            matriz[limiteFila][x] = contador;
            contador++;
          }
        }
        
        // Segunda columna, es decir, de abajo hacia arriba //
            if(contador<= total){
            for(y = limiteFila-1; y >= posicion+1; y--){
                matriz[y][posicion] = contador;
                contador++;
            }
        }
        
        // Condiciones que se cumpliran a partir del segundo ciclo, en adelante // 
        limiteFila = limiteFila-1;
        limiteColumna = limiteColumna-1; 
        posicion = posicion+1;
    }
     
    // Impresion de la Matriz en pantalla // 
    document.write("<table border='1' style='color:green'>");
        for(x=0; x<numeroFilas; x++){
            document.write("<tr>");
            for(y=0; y<numeroColumnas; y++){
                document.write("<td align='center'>"+matriz[x][y]+"</td>");
            }
        document.write("</tr>");
        }
    document.write("<table>");