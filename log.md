# 10/04/2023

React Native -> Typescript es compatible. Aprovechar ventajas de tipado fuerte y del compilador. En tal caso que no lo aprovechemos no es necesario utilizarlo. 

React Native -> Es hibrida. Funciona tanto para IOS y Android.Trabajar con EXPO CLI para poder desarrolar en ambas. 

Testing de pruebas y compilacion para dispositivos IOS es necesario una Mac. 

- App nativas -> son aplicaciones solo para IOS o Android. Es solo para un sistema operativo. No hay compatibilidad entre uno y otro. Swift para IOS
- App hibridas -> con un mismo codigo podemos desarrollar aplicaciones para ambas plataformas. -> {
		webviw -> subtipo que aquellas apps por medio de un desarrollo comun web(html/css) se envuelven para ser mostradas como apps nativas. IONIC
	}
{
	bridge -> se compila un codigo nativo y conecta JS con las caracteristicas propias del dispositivo. 
}

- React Native -> tiene componentes en si. Es una coleccion especial de componentes React que se compilan como widgets nativos. Por ej: <Contenedor /> <Texto /> <Imagen />

- Componentes de UI
No son equivalentes a los componentes de web, no se escribe HTML. 
Tiene sus propios componentes bases o iniciales para crear otros componentes. 
Todas las caracteristicas de React, se implementa en Native. 

# 12/04/2023
Android Studio
more action -> SDK Manger

# 17/04/2023
Para construir componentes nuevos necesitamos los componentes core. Los core son los componetes base y todos los componentes que querramos crear necesitan estar compuestos de los CORE COMPONENTS.
Punto negro en la documentacion es funcionalidad para IOS y si es verde es Android.

alendarevents repo de la clase. 
https://github.com/sotopro/calendarevents

- Estilos React native
https://reactnative.dev/docs/style

- Espacio seguro -> es un componente que indica desde donde se puede rendererizar un componente. Que la aplicacion no se monte sobre los componentes del dispositivo como el island de iphone. 

- William Candillon -> Animations with React Native. https://github.com/wcandillon

- React Native CLI 

# 19/04/2023
- Eventos en RN (click, mousevent, hover, focus)
- onChangeText() -> me retorna el texto que esta escrito dentro del campo
- ejecutar una funcion sin parentesis en onPress -> estoy indicandole que se llama como un callback, por que me retorna el resultado de la funcion que yo le indique. 
- Virtual DOM vs Shadow DOM vs DOM https://www.testim.io/blog/shadow-dom-vs-virtual-dom/
- Listas virualizadas -> FaltList : renderiza basicamente una lista que sopora diferentes funcionalidades. Es un componente con varias funcionalidades dentro. 
- Modales

# 24/4/2023
- Diseño y arquitectura -> debuggear aplicacion.
https://docs.google.com/document/d/1NhUM2BOppFTvwI0RRNMszuOnsiPRth_weGU99X32EzM/edit
- DEBUG -> bug: falla dentro de la aplicacion de motivos de sintaxis, de logica, errores de componentes o modulos mal cargados (mal proceso de integracion). El debbugin es encontrar y eliminar errores. Integrar el proceso de debuggin al proceso de desarrollo. Lo normal es ir consoleando todo para ir probando. 
 - Debbugear -> 
    * leer error
    * console.log, console.warn
    * chrome debugger y breakpoints. 
    ¿Cuáles son las mejores prácticas para depurar una aplicación de React Native? ¿Cuáles son las herramientas que recomiendas para depurar aplicaciones de React Native?
- Estructuras -> de diseño para ir creando componentes -> a largo plazo sea mas facil de escalar y se entienda claramente que se debe hacer. 
- Patron modular -> viene de la programacion funcional. Si yo utilizo un framework basado en JS debo aprovechar toda la capacidad de la plataforma (JS) para abstraer ciertos conceptos de JS y aplicarlos en cualquier tecnologia. 

## PREGUNTAS PARA HACER 
- ¿Cómo estructurarías un proyecto de React Native para que sea escalable y fácil de mantener? ¿Podrías explicar brevemente los principios de una buena arquitectura de proyecto en React Native?
- ¿Cómo seleccionas los componentes adecuados para un proyecto de React Native? ¿Cuáles son los factores que consideras al elegir un componente?
- ¿Cómo manejas la comunicación entre componentes en un proyecto de React Native? ¿Cuáles son las mejores prácticas para la comunicación entre componentes?
- ¿Cuáles son los errores comunes que has visto en los proyectos de React Native que has trabajado en el pasado? ¿Cómo los evitas y qué consejos darías a otros desarrolladores para evitarlos?
- ¿Qué estrategias utilizas para depurar y solucionar errores en React Native?
- ¿Cómo te aseguras de que tus componentes funcionen correctamente en diferentes dispositivos y tamaños de pantalla?
- ¿Cuál es tu enfoque para escribir pruebas unitarias y de integración para tus componentes de React Native?
- ¿Qué herramientas utilizas para realizar pruebas de UI en React Native?
- ¿Cómo evalúas la calidad del código de tus componentes de React Native?
- ¿Qué técnicas utilizas para optimizar el rendimiento de tus componentes de React Native?
- ¿Cómo manejas el estado y la lógica de tus componentes para hacerlos más fáciles de depurar y mantener?
- ¿Cómo abordas la compatibilidad de tu aplicación con diferentes versiones de React Native y sus dependencias?
- ¿Qué prácticas recomendadas sigues para mantener la calidad y la estabilidad de tus componentes de React Native a medida que la aplicación crece y evoluciona?
- ¿Qué herramientas y servicios de terceros recomiendas para mejorar el proceso de depuración y prueba de componentes de React Native?

# ESLint
npm I -D eslint eslint-config-universe prettier

# .prettierrc
{
    "printWidth": 100,
    "tabWidth": 2,
    "singleQuote": true,
    "bracketSameLine": true,
    "trailingComma": "es5"
}