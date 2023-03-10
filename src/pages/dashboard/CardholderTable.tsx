import {
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
    Paper,
    Stack,
    Typography,
    Button,
    ButtonGroup
} from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CardModel from '../../components/Modal/CardModel';
import { useContext, useState } from 'react';
import Barcode from 'react-barcode';
import DeleteModal from './DeleteModal';
import UpdateVisitorModal from './UpdateVisitorModal';
import { VisitorContext } from '../../contexts/VisitorContext';

const CardholderTable = ({ visitors, setModelOpen, modelOpen }: any) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableHeader />
                </TableHead>
                <TableBody>
                    {visitors && visitors.length > 0 && visitors.map((visitor: any, index: number) => {
                        return (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                <TableCell sx={{ width: '10px' }}>{index + 1}</TableCell>
                                <TableCell >{visitor.name}</TableCell>
                                <TableCell >{visitor.contact}</TableCell>
                                <TableCell align="left"><Barcode width={0.5} height={20} value={visitor.code} /></TableCell>
                                <TableCell align='left'>{visitor.email}</TableCell>
                                <TableCell >{visitor.clubName}</TableCell>
                                <TableCell >{visitor.designation}</TableCell>
                                <TableCell align='center'>
                                    <ActionCollection modelOpen={modelOpen} setModelOpen={setModelOpen} cardholders={visitor} userID={visitor._id} getCardHolderData={() => { }} /></TableCell>
                            </TableRow>
                        )
                    })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CardholderTable

const ActionCollection = ({ userID, cardholders }: { userID: string, cardholders: any, getCardHolderData: any, setModelOpen: any, modelOpen: any }) => {
    const [open, setOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const [updateModal, setUpdateModal] = useState<boolean>(false);

    const visitorContext = useContext(VisitorContext);

    return (
        <Stack direction={'row'} spacing={1} >
            <ButtonGroup variant='text'>
                <Button color='success' onClick={() => setOpen(true)}  ><VisibilityOutlinedIcon /></Button>
                <Button color='primary' onClick={() => setUpdateModal(true)}  ><BorderColorOutlinedIcon /></Button>
                <Button color='error' onClick={() => { setDeleteModal(true) }}><DeleteForeverOutlinedIcon /></Button>
                <CardModel cardholders={cardholders} modelOpen={open} setModelOpen={setOpen} />
                <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} deleteUser={visitorContext.deleteUser} userID={userID} />
                <UpdateVisitorModal cardholders={cardholders} updateModal={updateModal} setUpdateModal={setUpdateModal} updateVisitor={visitorContext.updateVisitor} />
            </ButtonGroup>
        </Stack>
    )
}

const TableHeader = () => {
    return <TableRow>
        <TableCell><Typography>S.N</Typography></TableCell>
        <TableCell><Typography>First Name</Typography></TableCell>
        <TableCell><Stack direction='row' gap={1}>
            <LocalPhoneOutlinedIcon />
            <Typography>Contact</Typography>
        </Stack></TableCell>
        <TableCell align='center'><Typography>Code</Typography></TableCell>
        <TableCell align='center'>
            <Stack direction='row' gap={1}>
                <EmailOutlinedIcon />
                <Typography>Email</Typography>
            </Stack>
        </TableCell>
        <TableCell><Typography>Club Name</Typography></TableCell>
        <TableCell><Typography>Designation</Typography></TableCell>
        <TableCell><Typography>Action</Typography></TableCell>
    </TableRow>
}