contenidoEntrada = `
<style>.caso { background:#fff; border-radius:12px; padding:20px; margin:20px 0;
        border-top:6px solid var(--acento); box-shadow:0 2px 8px rgba(0,0,0,.06); }
.caso h3 { margin-top:0; color:var(--acento); }
.formula { font-size:1.3rem; text-align:center; padding:12px; background:#f1f4f8;
           border-radius:8px; font-style:italic; margin:12px 0; }
.ejemplo { background:#fafaf7; border-left:4px solid var(--acento); padding:12px 16px; }
.res { font-weight:bold; color:var(--acento); }
.comun  { --acento:#2b6cb0; }
.tcp    { --acento:#2f855a; }
.difcua { --acento:#b7791f; }
</style>
<section>
    <title>Tres casos de factorización</title>
    <p>Técnica matemática que consiste en descomponer una expresión algebraica o un número entero en un producto de factores más simples, cuya multiplicación resulta en la expresión original.</p>
    <div class="caso comun">
      <h3>1. Término común (factor común)</h3>
      <p>Se aplica cuando todos los términos comparten un mismo factor. Ese factor se saca y dentro del paréntesis queda lo que resulta de dividir cada término entre él. Se forma con el MCD de los coeficientes y las variables repetidas con su menor exponente.</p>
      <div class="formula">ax + ay + az = a(x + y + z)</div>
      <div class="ejemplo">
        Factorizar 6x<sup>3</sup>y + 9x<sup>2</sup>y<sup>2</sup> − 3x<sup>2</sup>y
        <ol>
          <li>MCD de 6, 9 y 3 → 3</li>
          <li>Variables comunes con menor exponente → x<sup>2</sup>y</li>
          <li>Se divide cada término entre 3x<sup>2</sup>y: 2x, 3y, −1</li>
        </ol>
        <p class="res">= 3x<sup>2</sup>y(2x + 3y − 1)</p>
      </div>
    </div>

    <div class="caso tcp">
      <h3>2. Trinomio cuadrado perfecto</h3>
      <p>Trinomio donde dos términos tienen raíz cuadrada exacta y el tercero es el doble producto de esas raíces. Se factoriza como el cuadrado de un binomio, con el signo del doble producto.</p>
      <div class="formula">a<sup>2</sup> ± 2ab + b<sup>2</sup> = (a ± b)<sup>2</sup></div>
      <div class="ejemplo">
        Factorizar 4x<sup>2</sup> − 12x + 9
        <ol>
          <li>√(4x<sup>2</sup>) = 2x &nbsp; y &nbsp; √9 = 3</li>
          <li>Doble producto: 2(2x)(3) = 12x ✔</li>
        </ol>
        <p class="res">= (2x − 3)<sup>2</sup></p>
      </div>
    </div>

    <div class="caso difcua">
      <h3>3. Diferencia de cuadrados</h3>
      <p>Binomio de dos cuadrados perfectos que se restan. Se factoriza como la suma por la diferencia de sus raíces.</p>
      <div class="formula">a<sup>2</sup> − b<sup>2</sup> = (a + b)(a − b)</div>
      <div class="ejemplo">
        Factorizar 25x<sup>2</sup> − 16y<sup>2</sup>
        <ol>
          <li>√(25x<sup>2</sup>) = 5x &nbsp; y &nbsp; √(16y<sup>2</sup>) = 4y</li>
        </ol>
        <p class="res">= (5x + 4y)(5x − 4y)</p>
      </div>
    </div>
</section>`;
