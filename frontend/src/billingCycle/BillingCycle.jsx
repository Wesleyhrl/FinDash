import './BillingCycle.css'
import ContentHeader from '../common/template/ContentHeader.jsx';
import Content from './../common/template/Content';
import Tabs from './../common/tab/Tabs';
import TabsHeader from '../common/tab/TabsHeader.jsx';
import TabsContent from '../common/tab/TabsContent.jsx';
import TabHeader from '../common/tab/TabHeader.jsx';
import { BsCardList , BsClipboardPlus, BsPencilSquare , BsTrash} from "react-icons/bs";
import TabContent from './../common/tab/TabContent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import BillingCycleList from './BillingCycleList.jsx';
import BillingCycleForm from './BillingCycleForm.jsx';
import { init , create , update , remove } from './BillingCycleActions.js';

const mapDispatchToProps = dispatch => bindActionCreators({init ,create, update , remove }, dispatch);

function BillingCycle(props) {

    useEffect(()=>{
        props.init();
    })
        
    return (
        <div className='BillingCycle'>
            <ContentHeader title="Ciclos de Pagamentos" subtitle="Cadastro" />
            <Content>
                <div className='tabela'>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon={<BsCardList />} target="tabList" />
                            <TabHeader label="Incluir" icon={<BsClipboardPlus />} target="tabCreate" />
                            <TabHeader label="Alterar" icon={<BsPencilSquare />} target="tabUpdate" />
                            <TabHeader label="Excluir" icon={<BsTrash />} target="tabDelete" />
                        </TabsHeader>
                        <TabsContent bg="white">
                            <TabContent id="tabList">
                                <BillingCycleList/>
                            </TabContent>
                            <TabContent id="tabCreate">
                                <BillingCycleForm onSubmit={props.create} submitLabel="Incluir" submitVariant="primary"/>
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <BillingCycleForm onSubmit={props.update} submitLabel="Alterar" submitVariant="primary"/>
                            </TabContent>
                            <TabContent id="tabDelete">
                            <BillingCycleForm onSubmit={props.remove} readOnly={true} submitLabel="Excluir" submitVariant="danger"/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </div>
            </Content>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(BillingCycle);