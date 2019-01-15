# react-inline-styled

An easier way to write inline styles with react.

## Instead

```javascript
const fontSize = '14px', borderRadius = '4px';

<div
  style={{
    fontSize: fontSize,
    borderRadius: borderRadius,
    background: '#efefef',
    color: '#fff',
    padding: '10px'
  }}
> 
 div content
</div>
```

## Do this

```javascript
const fontSize = '14px', borderRadius = '4px';

<div
  style={css`
    font-size: ${fontSize};
    border-radius: ${radius};
    background: #efefef;
    color: #fff;
    padding: 10px;
  `}
> 
 div content
</div>
```
