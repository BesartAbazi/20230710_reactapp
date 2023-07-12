import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainItem from '../MainItem/mainItem';
import data from '../../data/data';

const Objects = () => {
    const { id } = useParams();
    const [objectData, setObjectData] = useState({});

    useEffect(() => {
        data.objects.forEach((item) => {
            if (item.id == id)
                setObjectData(item);
        });
    }, [id]);

    return (
        <main>
            {
                id ?
                    <MainItem id={objectData.id}
                        date={objectData.date}
                        header={objectData.header}
                        text={objectData.text}
                    />
                    :
                    data.objects.map((item) => {
                        return (
                            <MainItem id={item.id}
                                date={item.date}
                                header={item.header}
                                text={item.text}
                            />
                        )
                    })
            }
        </main>
    )
}

export default Objects;
