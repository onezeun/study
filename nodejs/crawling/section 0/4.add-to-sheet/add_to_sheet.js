const xlsx = require('xlsx');

function range_add_cell(range, cell) {
  if (!range) range = '';
  range = xlsx.utils.decode_range(range);
  range.s.r = Math.min(range.s.r, cell.r);
  range.s.c = Math.min(range.s.c, cell.c);
  range.e.r = Math.max(range.e.r, cell.r);
  range.e.c = Math.max(range.e.c, cell.c);
  range.range = xlsx.utils.encode_range(range);
  return range;
}

module.exports = function add_to_sheet(sheet, cell, type, raw) {
  const decodedCell = xlsx.utils.decode_cell(cell);
  sheet['!ref'] = range_add_cell(sheet['!ref'], decodedCell);
  sheet[cell] = { t: type, v: raw };
};