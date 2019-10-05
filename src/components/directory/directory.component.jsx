import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          title: 'watches',
          imageUrl:
            'https://scontent-sjc3-1.cdninstagram.com/vp/a014e3ac29b523a539e7c55dbe5689c6/5E1DBB4C/t51.2885-15/e35/47693872_582991722162286_4506720040309216592_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=110',
          id: 1,
          linkUrl: 'shop/watches'
        },
        {
          title: 'ties',
          imageUrl:
            'https://scontent-sjc3-1.cdninstagram.com/vp/0ada1a6a060df59a601440496a9655ef/5E20CD43/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/36532627_1627073370755504_1138911334172196864_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=108',
          id: 2,
          linkUrl: 'shop/ties'
        },
        {
          title: 'sneakers',
          imageUrl:
            'https://scontent-sjc3-1.cdninstagram.com/vp/d57eebf4fbeaee0fb0f403b826cc4e5b/5E3B09BB/t51.2885-15/e35/28750736_197966857632546_7625597954534932480_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=106',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'casual',
          imageUrl:
            'https://scontent-sjc3-1.cdninstagram.com/vp/76cbcbb2a0244d8df6520f5f959629cf/5E2B83CB/t51.2885-15/sh0.08/e35/c0.175.1406.1406a/s640x640/66629477_161653344991968_1539359677148919601_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=100',
          size: 'large',
          id: 4,
          linkUrl: 'shop/casual'
        },
        {
          title: 'professional',
          imageUrl: 'https://i.imgur.com/feTn7HA.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/professional'
        }
      ]
    }
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
          ></MenuItem>
        ))}
      </div>
    )
  }
}

export default Directory