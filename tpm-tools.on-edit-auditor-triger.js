/**
 * Funciton used to track all edits in the sheet and keep track to the updates considered
 * important and set date for the row updated. This is useful for larger spreadsheets where
 * multiple users make updates to the rows and offers auditable record to indicate that the
 * cell was changed.
 */
function onEdit(e){
  let sheetToTrack = 'Sheet1';  // name of a sheet to track. Can be removed it tracking all sheets
                                // or applied for list of sheets
  let columnToTrack = 5;  // use cases typically require updates in subset of columns
                          // these can be done as a list, range or unigue values
  let sheet = e.range.getSheet(); // getting sheet where the change was made
  if ((e.range.getWidth() + e.range.getHeight()) > 2 || // only pick up single cell changes
      e.range.getRow() == 1 || // ignore changes in a row 1 (typically headers)
      e.range.getColumn() != columnToTrack || // ignore changes in columns not being tracked
      sheet.getName() != sheetToTrack) { // track changes in specific sheet only
  return;  // exit script if changes should be ignored
  }
  let columnToSet = 15; // column number where update date should be set for a row
  let rowUpdated = e.range.getRow();

  // set the date for the row that was updated. Other options to inclulde is user making updates
  sheet.getRange(rowUpdated, columnToSet).setValue(getText_(new Date()));
  
  return;
}
  
  
