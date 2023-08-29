import React, {CSSProperties, Suspense, useState} from "react";
import {Text, View, Image} from "@liangshen/react-canvas";
import bgImg from '../download.png'
import RichText from "@liangshen/react-canvas-richtext";

import Layout from "minigame-canvas-engine";

const containerStyle = {width: '100%', height: '100%'}
const bodyContainerStyle = (bodyWidth: string, bodyHeight: string): CSSProperties => ({
    width: bodyWidth,
    height: bodyHeight,
    paddingTop: '7%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: '1%'
})
const leftContainerStyle = (leftWidth: string): CSSProperties => ({
    width: leftWidth,
    height: '100%',
    backgroundColor: 'transparent',
    marginLeft: '3%'
})
const itemContainerStyle = (leftWidth: string): CSSProperties => ({
    position: 'relative',
    height: '10%',
    width: leftWidth,
})
const itemImgStyle = (leftWidth: string): CSSProperties => ({
    position: 'absolute',
    height: '10%',
    width: leftWidth,
    marginLeft: '2%'
})
const titleStyle = (leftWidth: string): CSSProperties => ({
    width: leftWidth,
    fontSize: 10,
    height: '10%',
    textAlign: 'center',
    lineHeight: '9%',
    fontWeight: 'bold',
})
const rightContainerStyle = {
    width: '66%',
    paddingTop: '3%',
    height: '100%',
    marginLeft: '3%'
}
const contentStyle: CSSProperties = {
    width: '10%',
    fontSize: 10,
    height: '100%',
    wordBreak: 'break-all',
    wordWrap: 'break-word',
    lineHeight: '10%',
    textAlign: 'left',
    fontWeight: 'bold',
}
const bgImgStyle: CSSProperties = {
    width: '90%',
    height: '90%',
    position: 'absolute',
    top: 0,
    left: 0,
}


interface IAppProps {
    items: {
        selected: string
        unselected: string
        title: string
        content: string
    }[]
}

function Notice(props: IAppProps) {
    const [selectItem, setSelectItem] = useState(props.items[0]);

    const bodyWidth = '90%';
    const bodyHeight = '90%';
    const leftWidth = '21%';

    const clickItem = (item: any) => {
        setSelectItem(item);
    }
    return (
        <View style={containerStyle}>
            <View style={bodyContainerStyle(bodyWidth, bodyHeight)}>
                <Image src={bgImg} style={bgImgStyle}/>
                <View style={leftContainerStyle(leftWidth)}>
                    {
                        props.items.map((item: any, index: number) =>
                            <View key={index} style={itemContainerStyle(leftWidth)}>
                                <Image src={selectItem === item ? item.selected : item.unselected}
                                       style={itemImgStyle(leftWidth)}></Image>
                                <Text value={item.title} style={titleStyle(leftWidth)}
                                      onClick={() => clickItem(item)}></Text>
                            </View>
                        )
                    }
                </View>
                <RichText text={selectItem.content} style={contentStyle}></RichText>
                <View style={rightContainerStyle} id={"container"}>
                    {/*<Text value={selectItem.content} style={contentStyle}></Text>*/}
                </View>
            </View>
        </View>
    );
}

export default Notice;

// Text没问题
setTimeout(() => {
    const child = new Layout.Text({
        value: '测试一下测试一下',
        style: {
            paddingTop: 50,
            width: 500,
            fontSize: 10,
            height: 100,
            textAlign: 'center',
            lineHeight: 100,
            fontWeight: 'bold',
        }
    })
    const container = Layout.getElementById('container')!;
    container.appendChild(child);
    Layout.reflow();
    console.log('元素已插入，没问题')
}, 1000)

// RichText有问题
setTimeout(() => {
    const child = new (Layout as any)['RichText']({
        text: '测试一下测试一下',
        contentStyle: {
            paddingTop: 50,
            width: 500,
            fontSize: 10,
            height: 100,
            textAlign: 'center',
            lineHeight: 100,
            fontWeight: 'bold',
        }
    })
    const container = Layout.getElementById('container')!;
    container.appendChild(child);
    Layout.reflow();
    console.log('元素未插入，有问题')
}, 2000)
