import React, { useState } from "react";

const rows = [
    { id: 1, brand: 'Nike' },
    { id: 2, brand: 'Lacoste' },
    { id: 3, brand: 'Koton' },
    { id: 4, brand: 'Gucci' },
    { id: 5, brand: 'Adidas' },
    { id: 6, brand: 'LC Waikiki' },
    { id: 7, brand: 'H&M' },
    { id: 8, brand: 'Zara' },
    { id: 9, brand: 'Mavi' },
    { id: 10, brand: 'Puma' },
];

export default function DataTable() {
    const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);

    const handleRowCheckboxChange = (id: number) => {
        if (selectedRowIds.includes(id)) {
            setSelectedRowIds(selectedRowIds.filter((rowId) => rowId !== id));
        } else {
            setSelectedRowIds([...selectedRowIds, id]);
        }
    };

    const isRowSelected = (id: number) => selectedRowIds.includes(id);

    const handleSelectAll = () => {
        const allRowIds = rows.map((row) => row.id);
        setSelectedRowIds(allRowIds);
    };

    const handleUnselectAll = () => {
        setSelectedRowIds([]);
    };

    return (
        <div>
            Selected Row IDs: {selectedRowIds.join(', ')}
            <table>
                <thead>
                <tr>
                    <th>
                        <input
                            type="checkbox"
                            onChange={() => {
                                if (selectedRowIds.length === rows.length) {
                                    handleUnselectAll();
                                } else {
                                    handleSelectAll();
                                }
                            }}
                            checked={selectedRowIds.length === rows.length}
                        />
                    </th>
                    <th>ID</th>
                    <th>Brands</th>
                </tr>
                </thead>
                <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td>
                            <input
                                type="checkbox"
                                checked={isRowSelected(row.id)}
                                onChange={() => handleRowCheckboxChange(row.id)}
                            />
                        </td>
                        <td>{row.id}</td>
                        <td>{row.brand}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}