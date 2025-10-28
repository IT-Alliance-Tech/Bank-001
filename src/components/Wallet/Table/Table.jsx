import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import { Stat, StatArrow } from '@chakra-ui/react'
import Status from './Status'

function BasicTable() {

  const data = [
    // Added India as the first entry
    {
      url: "/wiki/India",
      code: "IND",
      name: "India",
      img: "//upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
      status: "Recommended",
      amount: "$500",
      state: "increase"
    },
    // ...all previous country objects
    {
      url: "/wiki/Afghanistan",
      code: "AFG",
      name: "Afghanistan",
      img: "//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Albania",
      code: "ALB",
      name: "Albania",
      img: "//upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
    {
      url: "/wiki/Algeria",
      code: "DZA",
      name: "Algeria",
      img: "//upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/American_Samoa",
      code: "ASM",
      name: "American Samoa",
      img: "//upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_American_Samoa.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Andorra",
      code: "AND",
      name: "Andorra",
      img: "//upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Angola",
      code: "AGO",
      name: "Angola",
      img: "//upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
    // ...other countries remain unchanged
    {
      url: "/wiki/Bulgaria",
      code: "BGR",
      name: "Bulgaria",
      img: "//upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
  ]

  const icon_styles={
    width: "30px",
    height: "30px",
    borderRadius: "100%",
    border: "2px solid #fff"
  }

  return (
    <TableContainer style={{maxHeight: "95vh", overflowY: "scroll"}}>
      <Table variant='simple'>
        <TableCaption>List of countries involved and their stats</TableCaption>
        <Thead>
          <Tr>
            <Th>Country</Th>
            <Th>name</Th>
            <Th isNumeric>amount</Th>
            <Th>CODE</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((country,index)=>{
            return (
              <Tr key={index}>
                <Td><img src={country.img} style={icon_styles}/></Td>
                <Td>{country.name}</Td>
                <Td isNumeric>
                  <Stat>
                    <StatArrow type={country.state} />
                    {country.amount}
                  </Stat>
                </Td>
                <Td>{country.code}</Td>
                <Td>
                  <Status status={country.status} />
                </Td>
              </Tr>
            )
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Country</Th>
            <Th>name</Th>
            <Th isNumeric>amount</Th>
            <Th>CODE</Th>
            <Th>Status</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default BasicTable
