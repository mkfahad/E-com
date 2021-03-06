import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import mastericon from './assets/mastercard.jpg'
import checkicon from './assets/check_circle.svg'
const PaymentCardMaster = () => {
    return (
        <Card sx={{ width: 280 }} className='border-[1px] border-cyan-800'>
            <CardContent>
                <div className='flex text-gray-400 text-sm justify-between'>
                    <img src={mastericon} />
                </div>
                <div className='flex text-gray-400 text-sm justify-between'>
                    <p>Card Type :</p>
                    <p>VISA</p>
                </div>
                <div className='flex text-gray-400 text-sm justify-between'>
                    <p>Card Number :</p>
                    <p>**************3303</p>
                </div>
                <div className='flex text-gray-400 text-sm justify-between'>
                    <p>Name On Card :</p>
                    <p>Jonathan King</p>
                </div>
                <div className='flex text-gray-400 text-sm justify-between'>
                    <p>Expiration Date :</p>
                    <p>07/22</p>
                </div>
            </CardContent>
            <CardActions className='flex justify-between '>
                <Button size="small">Edit</Button>
                <Button size="small">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default PaymentCardMaster;