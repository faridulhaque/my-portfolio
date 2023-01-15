import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';

import { FiMoreVertical } from 'react-icons/fi';
import TooltipContainer from '../ToolTip/TooltipContainer';
import Link from 'next/link';
import { GlobalContext } from '../../pages/_app';
import FeatureModal from '../modals/FeatureModal';

const ProjectCard = ({ project }) => {
    const { modalData } = useContext(GlobalContext)
    const { featureModalOpen,
        featureModalRef,
        setFeatureModalOpen,
    } = modalData;

    const [modalInfo, setModalInfo] = useState(null)

    const handleModal = () => {
        setModalInfo(project)
        setFeatureModalOpen(true)
    }


    useEffect(()=>{
        if(!featureModalOpen){
            setModalInfo(null)
            document.body.style.overflowY= "scroll"

        }
        else{
            document.body.style.overflowY= "hidden"
        }
    }, [featureModalOpen])


    return (

        <>
            <div className="w-full h-[500px] bg-[#ECECEC] shadow-xl transition-all duration-700 hover:shadow-2xl rounded-xxl hover:scale-105">
                <div className="w-full h-3/4 relative">
                    <Image className='w-full h-full' src={project?.image} alt="screen-shot" width={550} height={500}></Image>

                </div>

                <div className="w-full h-1/4 relative">
                    <h1 className="text-basic text-3xl mt-5 ml-4">{project?.name}</h1>
                    <span onClick={handleModal} className="absolute top-[10%] right-5 cursor-pointer">
                        <TooltipContainer dataTip="See More" icon={<FiMoreVertical className='text-basic text-[2vh]'></FiMoreVertical>} cn="bg-white"></TooltipContainer>
                    </span>
                </div>
            </div>


            {
                (featureModalOpen && modalInfo) && <FeatureModal project={modalInfo} modalRef={featureModalRef} setFeatureModalOpen={setFeatureModalOpen}></FeatureModal>
            }

        </>
    );
};

export default ProjectCard;