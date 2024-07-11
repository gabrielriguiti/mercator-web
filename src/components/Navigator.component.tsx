import React from "react";
import {Card} from "primereact/card";
import {PanelMenu} from "primereact/panelmenu";

const Navigator: React.FC = () => {

    const items = [
        {
            label:'File',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                        {
                            label:'Bookmark',
                            icon:'pi pi-fw pi-bookmark'
                        },
                        {
                            label:'Video',
                            icon:'pi pi-fw pi-video'
                        },

                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    separator:true
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        },
    ];

    return (
        <Card>
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </Card>
    )
}

export default Navigator