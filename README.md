# SimpleDnD - Simple Drag and Drop

#### A simple drag and drop component for react that is actually intuitive and easy to use.

## Contents.
 - Guide
 - API / Props

## Guide - You can use SimpleDnD three very easy steps.

### Step 1.
Install and Import SimpleDnD into your component.
```
npm install simplednd --save
```

In your react component:
```
...
import SimpleDnD from 'simplednd';
```

### Step 2.
Have an array saved into your state.
```
export default class YourComponent extends React.Component {
  state = {
    ...
    someArray: [{ some: 'stuff' }, { some: 'in' }, { some: 'here' }],
  }
  ...
}
```

### Step 3.
In the render method of your component include Simple DnD with your array and a way to update the state.
```
...
render() {
  const {
    someArray,
  } = this.state;

  return (
    <SimpleDnD
      someArray={someArray}
      saveToState={nextArray => this.setState({ someArray: nextArray })}
    />
  )
}
...
```

## API / Props

### `someArray`
You will need to pass in an array of objects.

An Example:
Your state / array:
```
state = {
  ...
  someArray: [{ some: 'stuff' }, { some: 'in' }, { some: 'here' }],
}
```

Your SimpleDnD component:
```
<SimpleDnD
  someArray={someArray}
/>
```

### `saveToState`
You need to pass in a function that will update your states array with a new array

An Example:
```
<SimpleDnD
  saveToState={nextArray => this.setState({ someArray: nextArray })}
/>
```

### `ArrayTemplate`
You need to pass in a node (element) to structure out how you want your array objects to be displayed.

An Example:

Your state / array:
```
state = {
  ...
  someArray: [{ some: 'stuff' }, { some: 'in' }, { some: 'here' }],
}
```

Your SimpleDnD component:
```
<SimpleDnD
  ...
  ArrayTemplate={
    ({ some }) => (
      <div>
        <h4>
          {some}
        </h4>
      </div>
    )
  }
/>

```

### `LastTileTemplate`
You need to pass in a node (element) to add in as the last element in the flex grid.

An Example:

```
<SimpleDnD
  ...
  LastTileTemplate={
    () => (
      <div
        onClick={myClickEvent}
      >
        <h4>
          Add another item!
        </h4>
      </div>
    )
  }
/>

```