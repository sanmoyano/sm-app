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
- Modales -> 