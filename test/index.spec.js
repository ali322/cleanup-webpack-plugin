const webpack = require('webpack')
const path = require('path')
const glob = require('glob').sync
const rm = require('rimraf')
const expect = require('chai').expect
const CleanupPlugin = require('../')

const OUTPUT_PATH = path.join(__dirname, 'dist')

describe('Content Replace Plugin', () => {
  beforeEach(done => {
    rm('test/dist/*.*', done)
  })
  it('should replace content correctly', done => {
    webpack(
      {
        entry: path.join(__dirname, 'fixture', 'entry.js'),
        output: {
          path: OUTPUT_PATH,
          filename: '[name]-[hash:8].min.js'
        },
        plugins: [
          new CleanupPlugin({
            // when: 'after',
            include: [`${OUTPUT_PATH}/*.js`]
          })
        ]
      },
      (err, stats) => {
        expect(err).to.equal(null)
        const cnt = glob(`${OUTPUT_PATH}/*.js`)
        expect(cnt.length).to.eq(1)
        done()
      }
    )
  })
})
