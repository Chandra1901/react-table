import React, { useState } from 'react'
import Checkbox from './Checkbox'
import GcpIcon from './GcpIcon'
import AwsIcon from './AwsIcon'
import PassButton from './PassButton'
import InstanceButton from './InstanceButton'
import data from '../mock-data.json'

const Table = (props) =>  {

    const [arrData, setArrData] = useState(data);
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>{<Checkbox />}</th>
                    <th>CT Group</th>
                    <th>Cloud Tenant</th>
                    <th>Organisation</th>
                    <th>Cloud</th>
                    <th>Cloud Account</th>
                    <th>DB Tech</th>
                    <th>Region</th>
                    <th>DB Instances</th>
                    <th>Total Controls</th>
                    <th>% Pass</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    arrData.map((row) => {
                        return (
                            <tr>
                                <td>{<Checkbox />}</td>
                                <td>{row.group}</td>
                                <td>{row.CloudTenant}</td>
                                <td>{row.organization}</td>
                                <td>{ row.cloud === "GCP"? 
                                        <GcpIcon width={56} height={56} /> : 
                                        <AwsIcon width={56} height={56} />}</td>
                                <td>{row.CloudAccount}</td>
                                <td>{row.DBTech}</td>
                                <td style={{color: "blue"}}>{row.Region}</td>
                                <td>{row.DBInstances}</td>
                                <td>{row.TotalControls}</td>
                                <td>{row.Pass && <PassButton />}</td>
                                <td>{row.Action && <InstanceButton />}</td>
                                <td></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table