contenidoEntrada = `
<style>
.caso { 
    background:#fff; 
    border-radius:12px; 
    padding:20px; 
    margin:20px 0;
    border-top:6px solid var(--acento); 
    box-shadow:0 2px 8px rgba(0,0,0,.06); 
}

.caso h3 { 
    margin-top:0; 
    color:var(--acento); 
}

.formula { 
    font-size:1.3rem; 
    text-align:center; 
    padding:12px; 
    background:#f1f4f8;
    border-radius:8px; 
    font-style:italic; 
    margin:12px 0; 
}

.ejemplo { 
    background:#fafaf7; 
    border-left:4px solid var(--acento); 
    padding:12px 16px; 
}

.res { 
    font-weight:bold; 
    color:var(--acento); 
}

/* Desarrollo paso a paso: operación a la izquierda, explicación a la derecha */
.linea {
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:16px;
    align-items:center;
    padding:8px 0;
    border-bottom:1px dashed #ddd;
}

.linea .op {
    text-align:right;
    font-size:1.1rem;
    font-style:italic;
}

.linea .nota {
    color:#555;
    font-size:.9rem;
}

/* Fracciones apiladas */
.frac {
    display:inline-flex;
    flex-direction:column;
    vertical-align:middle;
    text-align:center;
    font-size:.9em;
    margin:0 2px;
}

.frac > span:first-child {
    border-bottom:1px solid currentColor;
    padding:0 3px;
}

.comprobacion {
    background:#eafaf1;
    border-left:4px solid #27ae60;
    padding:10px 16px;
    margin-top:14px;
    border-radius:4px;
}

.comprobacion strong {
    color:#1e8449;
}

/* Colores de cada sección */
.general      { --acento:#1a5276; }
.enteras      { --acento:#7c3aed; }
.fraccionaria { --acento:#0891b2; }
.agrupacion   { --acento:#e05a47; }
.literales    { --acento:#d68910; }
.problema     { --acento:#2e7d32; }
</style>

<section>
    <h2>Ecuaciones de Primer Grado</h2>

    <p>
        Una ecuación de primer grado es una igualdad en la que la incógnita 
        aparece elevada a la potencia 1. Resolverla significa encontrar el valor 
        de la incógnita que hace que ambos lados de la igualdad sean iguales.
    </p>

    <!-- PUNTO 2: PROCEDIMIENTO GENERAL -->
    <div class="caso general">
        <h3>Procedimiento general</h3>

        <p>
            <strong>Idea clave:</strong> una ecuación es como una balanza. 
            Cualquier operación que se haga de un lado se debe hacer también del 
            otro para que la igualdad se mantenga.
        </p>

        <div class="formula">
            ax + b = c &nbsp; → &nbsp; x = 
            <span class="frac"><span>c − b</span><span>a</span></span>
            &nbsp; (a ≠ 0)
        </div>

        <ol>
            <li><strong>Eliminar signos de agrupación:</strong> quitar paréntesis, corchetes y llaves aplicando la propiedad distributiva, empezando por los de adentro.</li>
            <li><strong>Eliminar denominadores:</strong> si hay fracciones, multiplicar todos los términos por el mínimo común múltiplo (mcm) de los denominadores.</li>
            <li><strong>Transponer términos:</strong> pasar los términos con incógnita a un lado y los números al otro, usando la operación inversa (lo que suma pasa restando y viceversa).</li>
            <li><strong>Reducir términos semejantes:</strong> sumar o restar los términos de cada lado.</li>
            <li><strong>Despejar la incógnita:</strong> dividir ambos lados entre el coeficiente de la incógnita.</li>
            <li><strong>Comprobar:</strong> sustituir el valor encontrado en la ecuación original y verificar que ambos lados den el mismo resultado.</li>
        </ol>
    </div>

    <!-- PUNTO 3: EJEMPLO 1 - ENTERAS -->
    <div class="caso enteras">
        <h3>1. Ecuación entera</h3>

        <p>
            <strong>¿Cómo reconocerla?</strong> Todos los coeficientes son números 
            enteros y no hay denominadores ni signos de agrupación.
        </p>

        <div class="ejemplo">
            <strong>Ejemplo:</strong> Resolver 5x − 7 = 2x + 14

            <div class="linea"><span class="op">5x − 2x = 14 + 7</span><span class="nota">Transponemos términos</span></div>
            <div class="linea"><span class="op">3x = 21</span><span class="nota">Reducimos términos semejantes</span></div>
            <div class="linea"><span class="op">x = <span class="frac"><span>21</span><span>3</span></span></span><span class="nota">Dividimos entre 3</span></div>

            <p class="res">x = 7</p>

            <div class="comprobacion">
                <strong>Comprobación:</strong><br>
                Lado izquierdo: 5(7) − 7 = 35 − 7 = 28<br>
                Lado derecho: 2(7) + 14 = 14 + 14 = 28<br>
                28 = 28 ✔
            </div>
        </div>
    </div>

    <!-- PUNTO 3: EJEMPLO 2 - FRACCIONARIAS -->
    <div class="caso fraccionaria">
        <h3>2. Ecuación fraccionaria</h3>

        <p>
            <strong>¿Cómo reconocerla?</strong> Tiene términos con denominadores. 
            Lo primero es eliminarlos multiplicando todo por el mcm.
        </p>

        <div class="ejemplo">
            <strong>Ejemplo:</strong> Resolver 
            <span class="frac"><span>x + 3</span><span>4</span></span> − 
            <span class="frac"><span>x − 2</span><span>3</span></span> = 
            <span class="frac"><span>1</span><span>2</span></span>

            <div class="linea"><span class="op">3(x + 3) − 4(x − 2) = 6</span><span class="nota">Multiplicamos todo por el mcm (4, 3, 2) = 12</span></div>
            <div class="linea"><span class="op">3x + 9 − 4x + 8 = 6</span><span class="nota">Eliminamos paréntesis (cuidado con el signo −)</span></div>
            <div class="linea"><span class="op">−x + 17 = 6</span><span class="nota">Reducimos términos semejantes</span></div>
            <div class="linea"><span class="op">−x = 6 − 17</span><span class="nota">Transponemos el 17</span></div>
            <div class="linea"><span class="op">−x = −11</span><span class="nota">Restamos</span></div>

            <p class="res">x = 11</p>

            <div class="comprobacion">
                <strong>Comprobación:</strong><br>
                <span class="frac"><span>11 + 3</span><span>4</span></span> − 
                <span class="frac"><span>11 − 2</span><span>3</span></span> = 
                <span class="frac"><span>14</span><span>4</span></span> − 
                <span class="frac"><span>9</span><span>3</span></span> = 
                3.5 − 3 = 0.5 = 
                <span class="frac"><span>1</span><span>2</span></span> ✔
            </div>
        </div>
    </div>

    <!-- PUNTO 3: EJEMPLO 3 - SIGNOS DE AGRUPACIÓN -->
    <div class="caso agrupacion">
        <h3>3. Ecuación con signos de agrupación</h3>

        <p>
            <strong>¿Cómo reconocerla?</strong> Tiene paréntesis ( ), corchetes [ ] 
            o llaves { }. Se eliminan de adentro hacia afuera.
        </p>

        <div class="ejemplo">
            <strong>Ejemplo:</strong> Resolver 3[2x − (x − 4)] = 2(x + 9)

            <div class="linea"><span class="op">3[2x − x + 4] = 2(x + 9)</span><span class="nota">Quitamos el paréntesis interior (el − cambia los signos)</span></div>
            <div class="linea"><span class="op">3[x + 4] = 2(x + 9)</span><span class="nota">Reducimos dentro del corchete</span></div>
            <div class="linea"><span class="op">3x + 12 = 2x + 18</span><span class="nota">Distribuimos en ambos lados</span></div>
            <div class="linea"><span class="op">3x − 2x = 18 − 12</span><span class="nota">Transponemos términos</span></div>

            <p class="res">x = 6</p>

            <div class="comprobacion">
                <strong>Comprobación:</strong><br>
                Lado izquierdo: 3[2(6) − (6 − 4)] = 3[12 − 2] = 3(10) = 30<br>
                Lado derecho: 2(6 + 9) = 2(15) = 30<br>
                30 = 30 ✔
            </div>
        </div>
    </div>

    <!-- PUNTO 3: EJEMPLO 4 - LITERALES -->
    <div class="caso literales">
        <h3>4. Ecuación con literales</h3>

        <p>
            <strong>¿Cómo reconocerla?</strong> Además de la incógnita, tiene otras 
            letras (a, b, m, n...) que representan valores constantes. Se despeja 
            la incógnita igual que siempre, y el resultado queda en términos de 
            esas letras.
        </p>

        <div class="ejemplo">
            <strong>Ejemplo:</strong> Despejar x en 2ax − b = ax + 3b

            <div class="linea"><span class="op">2ax − ax = 3b + b</span><span class="nota">Transponemos: términos con x a la izquierda</span></div>
            <div class="linea"><span class="op">ax = 4b</span><span class="nota">Reducimos términos semejantes</span></div>
            <div class="linea"><span class="op">x = <span class="frac"><span>4b</span><span>a</span></span></span><span class="nota">Dividimos entre a (con a ≠ 0)</span></div>

            <p class="res">x = <span class="frac"><span>4b</span><span>a</span></span>, &nbsp; con a ≠ 0</p>

            <div class="comprobacion">
                <strong>Comprobación:</strong><br>
                Lado izquierdo: 2a(<span class="frac"><span>4b</span><span>a</span></span>) − b = 8b − b = 7b<br>
                Lado derecho: a(<span class="frac"><span>4b</span><span>a</span></span>) + 3b = 4b + 3b = 7b<br>
                7b = 7b ✔
            </div>
        </div>
    </div>

    <!-- PUNTO 4: PROBLEMA DE PLANTEAMIENTO -->
    <div class="caso problema">
        <h3>Problema de planteamiento: corrección de bugs</h3>

        <div class="formula">
            En un proyecto de software corregí 42 bugs en dos semanas. 
            En la segunda semana corregí 6 bugs más que el doble de los 
            que corregí en la primera. ¿Cuántos bugs corregí cada semana?
        </div>

        <p><strong>Paso 1. Incógnita</strong></p>
        <div class="ejemplo">
            x = número de bugs corregidos en la primera semana
        </div>

        <p><strong>Paso 2. Traducción</strong></p>
        <table>
            <tr>
                <th>Lenguaje común</th>
                <th>Lenguaje algebraico</th>
            </tr>
            <tr>
                <td>Bugs de la primera semana</td>
                <td>x</td>
            </tr>
            <tr>
                <td>El doble de los de la primera semana</td>
                <td>2x</td>
            </tr>
            <tr>
                <td>6 más que el doble (segunda semana)</td>
                <td>2x + 6</td>
            </tr>
            <tr>
                <td>En total corregí 42</td>
                <td>primera + segunda = 42</td>
            </tr>
        </table>

        <p><strong>Paso 3. Ecuación</strong></p>
        <div class="formula">
            x + (2x + 6) = 42
        </div>

        <p><strong>Paso 4. Solución</strong></p>
        <div class="ejemplo">
            <div class="linea"><span class="op">x + 2x + 6 = 42</span><span class="nota">Quitamos el paréntesis</span></div>
            <div class="linea"><span class="op">3x = 42 − 6</span><span class="nota">Reducimos y transponemos el 6</span></div>
            <div class="linea"><span class="op">3x = 36</span><span class="nota">Restamos</span></div>
            <div class="linea"><span class="op">x = 12</span><span class="nota">Dividimos entre 3</span></div>

            <p class="res">
                Primera semana: 12 bugs <br>
                Segunda semana: 2(12) + 6 = 30 bugs
            </p>
        </div>

        <p><strong>Paso 5. Validación contra el enunciado</strong></p>
        <div class="comprobacion">
            <strong>¿Suman 42 en total?</strong> 12 + 30 = 42 ✔<br>
            <strong>¿La segunda semana es 6 más que el doble de la primera?</strong> 
            El doble de 12 es 24, y 24 + 6 = 30 ✔<br>
            <strong>¿Tiene sentido?</strong> Sí, son números enteros y positivos, 
            como debe ser una cantidad de bugs ✔
        </div>
    </div>

</section>`;
