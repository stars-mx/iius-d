const path = require('path')
const fse = require('fs-extra')
const fs = require('fs')
const stringify = require('json-stable-stringify-without-jsonify')
const { upperFirst, isArray } = require('lodash')

// 遍历文档文件夹
const targetDir = path.resolve(__dirname, '../', 'docs')
// sidebar 配置文件路径
const sidebarJson = path.resolve(targetDir, '.vuepress/configs/sidebar.json')
// 忽略的文件夹
const ignoreDirs = [
    '.vuepress'
]

/**
 * 移除文件后缀名
 * @param {string} p
 * @returns {string}
 */
function removeExtname (p) {
    return p.replace(path.extname(p), '')
}

function filterMdFile (filename) {
    if (path.extname(filename) !== '.md') {
        return ''
    }
    return filename
}

/**
 * 递归遍历文件夹, 返回文件的相对路径（相对于 dirPath）
 * @param {string} dirPath
 * @returns {string[]}
 */
function getMdFiles (dirPath = targetDir) {
    function getFiles (dirP) {
        const dirContent = fse.readdirSync(dirP)
        return dirContent.map(fp => {
            if (ignoreDirs.includes(fp)) {
                return undefined
            }

            const nextPath = path.resolve(dirP, fp)
            const isDir = fs.statSync(nextPath).isDirectory()

            return isDir ? getFiles(nextPath) : filterMdFile(nextPath.replace(dirPath, ''))
        }).filter(Boolean)
    }

    return getFiles(dirPath)
}

/**
 * 生成 sidebar 配置对象
 * @param {string[]} fPath
 * @returns {any}
 */
function generateSidebar (fPath) {
    const dirname = path.dirname(fPath[0]).substring(1)

    const wrapper = {
        text: upperFirst(dirname),
        collapsible: true,
        children: []
    }

    fPath.forEach(f => {
        wrapper.children.push({
            text: removeExtname(path.basename(f)),
            link: removeExtname(f)
        })
    })

    return wrapper
}

const fileMap = {
    '/README.md': {
        text: '简介',
        link: '/'
    }
}

const files = getMdFiles()

const sidebar = files.map(f => {
    if (isArray(f) && f.length > 0) {
        return generateSidebar(f)
    }

    if (fileMap[f] != null) {
        return fileMap[f]
    }

    return f
})

const content = stringify({ sidebar }, { space: 4 })

fse.writeFileSync(sidebarJson, content, 'utf-8')
console.log('✅ 更新侧边栏成功')
