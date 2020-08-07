# win-animate

Plugin WinnetouJs para criar animações css nos aplicativos.

## Instalação

Na pasta raiz do seu projeto (onde se encontra o wbr)

```
npm i win-animate
```

Isso irá instalar todas as animações do https://animate.style como uma dependência na sua pasta node_modules, no caminho

```
./node_modules/win-animate/src/{nome_do_grupo}/{nome_da_animação}
```

## Imports

Para usar faça o import do método animate para o seu js

```javascript
// use o caminho relativo para poder usar em dev no chrome
// veja a documentação do WinnetouJs para mais informações
import { animate } from "../node_modules/win-animate/src/animate.js";
```

E faça o import dos módulos sass dentro do seu entry point do sass.

```css
@import "../node_modules/win-animate/src/animateCore.scss";
@import "../node_modules/win-animate/src/attention_seekers/bounce.scss";
```

Não esqueça de compilar o sass com o wbr para gerar o bundleCss.

## Uso

Para usar, use o método animate

```javascript
animate(div.ids.simpleDiv, "bounce");
```

Existe um terceiro parâmetro opcional para velocidade.

slower | slow | fast | faster

Retorna uma promise quando a animação estiver completa.

```javascript
animate(div.ids.simpleDiv, "bounce", "faster").then(res => {
  console.log("animation complete");
});
```

## Author

Criado por Winnetou Kaue, autor de WinnetouJs Framework.

https://github.com/kauesedrez

## Créditos

Criado a partir do Animate.css (https://animate.style) v4.

Thanks to Daniel Eden, Elton Mesquita and Waren Gonzaga for their incredible work.

## Licence

MIT

https://opensource.org/licenses/MIT
