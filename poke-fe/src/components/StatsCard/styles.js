import styled from 'styled-components'

const StatsPill = styled.article`
  display: flex;
  border-radius: 10px;
  position: relative;
  margin: 0 auto 10px;
`

const StatsName = styled.span`
  font-size: 12px;
  height: 100%;
  text-align: center;
  padding: 5px 10px;
  display: block;
  width: 120px;
  background-color: rgba(255, 255, 255, 0.4);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

const StatsBar = styled.div`
  font-size: 12px;
  text-align: right;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 5px 10px;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export { StatsPill, StatsName, StatsBar }
