// Convert column-based data to rows
// e.g. { a: [1, 2], b: ['x', 'y'] } to [{ a: 1, b: 'x' }, { a: 2, b: 'y' }]
export function columnsToRows(columns) {
  const names = Object.keys(columns)
  const rows = new Array(columns[names[0]].length)
  for (let i = 0; i < rows.length; i++) {
    rows[i] = {}
    for (let name of names) {
      rows[i][name] = columns[name][i]
    }
  }
  return rows
}