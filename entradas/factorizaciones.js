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

/* Nuevos colores */
.cubos    { --acento:#7c3aed; }
.trinomio { --acento:#0891b2; }
.aspa     { --acento:#e05a47; }
</style>

<section>
    <title>Tres casos de factorización</title>

    <p>
        La factorización es una técnica matemática que consiste en descomponer 
        una expresión algebraica en un producto de factores más simples, cuya 
        multiplicación da como resultado la expresión original.
    </p>

    <!-- CASO 1 -->
    <div class="caso cubos">
        <h3>1. Suma y diferencia de cubos</h3>

        <p>
            <strong>¿Cómo reconocerlo?</strong> Se reconoce porque es un binomio, 
            es decir, tiene dos términos, y ambos poseen raíz cúbica exacta. 
            Los términos pueden estar sumándose o restándose.
        </p>

        <div class="formula">
            a<sup>3</sup> + b<sup>3</sup> = 
            (a + b)(a<sup>2</sup> − ab + b<sup>2</sup>)
            <br><br>
            a<sup>3</sup> − b<sup>3</sup> = 
            (a − b)(a<sup>2</sup> + ab + b<sup>2</sup>)
        </div>

        <p><strong>Procedimiento:</strong></p>
        <ol>
            <li>Obtener la raíz cúbica de cada término.</li>
            <li>Formar un binomio con las raíces, conservando el signo de la expresión original.</li>
            <li>Formar un trinomio con el cuadrado de la primera raíz, el producto de ambas raíces y el cuadrado de la segunda raíz.</li>
            <li>En el trinomio, el término de en medio lleva el signo contrario al del binomio.</li>
        </ol>

        <div class="ejemplo">
            <strong>Ejemplo:</strong> Factorizar 
            8x<sup>3</sup> − 27

            <ol>
                <li>∛(8x<sup>3</sup>) = 2x</li>
                <li>∛27 = 3</li>
                <li>Se forma el binomio: (2x − 3)</li>
                <li>
                    Se forma el trinomio:
                    (2x)<sup>2</sup> + (2x)(3) + 3<sup>2</sup>
                    = 4x<sup>2</sup> + 6x + 9
                </li>
            </ol>

            <p class="res">
                = (2x − 3)(4x<sup>2</sup> + 6x + 9)
            </p>
        </div>
    </div>

    <!-- CASO 2 -->
    <div class="caso trinomio">
        <h3>2. Trinomio x² + bx + c</h3>

        <p>
            <strong>¿Cómo reconocerlo?</strong> Es un trinomio de segundo grado 
            en el que el coeficiente de x<sup>2</sup> es 1. Tiene la forma 
            x<sup>2</sup> + bx + c.
        </p>

        <div class="formula">
            x<sup>2</sup> + bx + c = (x + m)(x + n)
            <br><br>
            donde: &nbsp; m + n = b &nbsp; y &nbsp; mn = c
        </div>

        <p><strong>Procedimiento:</strong></p>
        <ol>
            <li>Identificar los valores de b y c.</li>
            <li>Buscar dos números que multiplicados den c.</li>
            <li>Comprobar que esos mismos números sumados den b.</li>
            <li>Colocar los números encontrados en dos binomios.</li>
        </ol>

        <div class="ejemplo">
            <strong>Ejemplo:</strong> Factorizar 
            x<sup>2</sup> + 7x + 12

            <ol>
                <li>Se buscan dos números que multiplicados den 12.</li>
                <li>Esos mismos números deben sumar 7.</li>
                <li>Los números son 3 y 4, porque 3 × 4 = 12 y 3 + 4 = 7.</li>
                <li>Se colocan en los binomios: (x + 3)(x + 4).</li>
            </ol>

            <p class="res">
                = (x + 3)(x + 4)
            </p>
        </div>
    </div>

    <!-- CASO 3 -->
    <div class="caso aspa">
        <h3>3. Trinomio ax² + bx + c (aspa simple)</h3>

        <p>
            <strong>¿Cómo reconocerlo?</strong> Es un trinomio de segundo grado 
            de la forma ax<sup>2</sup> + bx + c, donde el coeficiente de 
            x<sup>2</sup> es diferente de 1. Para factorizarlo se puede utilizar 
            el método de aspa simple.
        </p>

        <div class="formula">
            ax<sup>2</sup> + bx + c = (mx + n)(px + q)
        </div>

        <p><strong>Procedimiento:</strong></p>
        <ol>
            <li>Descomponer el primer término ax<sup>2</sup> en dos factores.</li>
            <li>Descomponer el término independiente c en dos factores.</li>
            <li>Multiplicar los factores de manera cruzada, formando el aspa.</li>
            <li>Sumar los productos cruzados y comprobar que el resultado sea bx.</li>
            <li>Si coincide, escribir los factores en forma de dos binomios.</li>
        </ol>

        <div class="ejemplo">
            <strong>Ejemplo:</strong> Factorizar 
            6x<sup>2</sup> + 11x + 3

            <ol>
                <li>
                    Descomponemos 6x<sup>2</sup>:
                    3x · 2x
                </li>
                <li>
                    Descomponemos 3:
                    1 · 3
                </li>
                <li>
                    Probamos los productos cruzados:
                    (3x)(3) = 9x y (2x)(1) = 2x
                </li>
                <li>
                    Sumamos los productos cruzados:
                    9x + 2x = 11x ✔
                </li>
                <li>
                    Por lo tanto, los factores son:
                    (3x + 1)(2x + 3)
                </li>
            </ol>

            <p class="res">
                = (3x + 1)(2x + 3)
            </p>
        </div>
    </div>

</section>`;
