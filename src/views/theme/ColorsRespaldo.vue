<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader> <CIcon icon="cil-drop" /> Theme</CCardHeader>
        <CCardBody>
            <div>Hello World</div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import ColorTheme from './ColorTheme'
export default {
  name: 'Colors',
  components: { ColorTheme },
}
</script>
