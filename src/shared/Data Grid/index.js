

const DataGrid = ({columnDefs, Data, onEdit, onDelete}) => {
    return (
        <table className="table table-striped">
            <thead>
            <tr>
             {columnDefs.map((column)=>(
                <th key={column.key}>{column.label}</th>
               ) )}
               <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                    Data.map((row)=>(
                        <tr key={row.id}>
                            {
                                columnDefs.map((column)=>(
                                    <td key = {column.key}>{row[column.key]}</td>
                                ))
                                }
                            <td>
                            <div className="btn-group">
                                <button className="btn btn-sm btn-primary"
                                onClick={() => onEdit(row)}
                                >Edit </button>
                                <button className="btn btn-sm btn-danger"
                                onClick={() => onDelete(row)}
                                >Delete </button>
                            </div>
                            </td>
                                
                        </tr>
                        
                    ))
                            }
            </tbody>            
       
            </table>

                );
}
export default DataGrid;