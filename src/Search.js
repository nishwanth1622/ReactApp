import React, {useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import filterFactory ,{ textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'

function Search(){
    const [employeeList, setUserList]= useState([]);

    const columns =[
        {dataField: 'employeeNumber', text:'Employee ID'},
        {dataField: 'firstName', text:'First Name', sort: true, filter: textFilter()},
        {dataField: 'lastName', text:'Last Name', sort: true, filter: textFilter()}
    ]
    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 0,
        lastPageText: '>>',
        firstPagetext: '<<',
        nextpageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage){
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function(page, sizePerPage){
            console.log('page', page);
            console.log('sizePerPage'. sizePerPage);
        }
    });

    useEffect(()=>{
        fetch('http://localhost:8081/employees')
        .then(response => response.json())
        .then(result => setUserList(result))
        .catch(error => console.log(error));
    }, [])

    return <div>
         <BootstrapTable bootstrap4
          keyField='employeeNumber' 
          columns={columns}
           data={employeeList}
           pagination ={pagination}
           filter = {filterFactory()}/>
    </div>
}
export default Search
