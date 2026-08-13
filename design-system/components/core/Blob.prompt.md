Background atmosphere. Two per band, maximum; always partly off-canvas.

```jsx
<div style={{ position: 'relative', overflow: 'hidden' }}>
  <Blob color="var(--sky)" top={-120} right={-60} />
  <Blob color="var(--sun)" size={360} opacity={0.4} bottom={-200} left={180} />
  ...content...
</div>
```

Never place a blob over text, and never lower text contrast to accommodate one.