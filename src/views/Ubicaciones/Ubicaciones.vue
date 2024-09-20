<template>
    <div class="card">
      <Toolbar class="mb-4">
        <template #start>
          <div class="my-2">
            <h2>Ubicaciones</h2 >
          </div>
        </template>
        <template #end>
          <span class="p-input-icon-left">
            <Button icon="pi pi-download" class="p-button-rounded p-button-contrast mr-2" @click="exportCSV" />
            <Button icon="pi pi-plus" class="p-button-rounded p-button-success mr-2" @click="openNew" />
            <InputText v-model="filters['global'].value" placeholder="Buscar..." />
          </span>
        </template>
      </Toolbar>
  
      <DataTable
        :value="motoristas"
        :paginator="false"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} motoristas"
        responsiveLayout="scroll"
      >
        <Column field="motorista" header="Nombre" sortable style="min-width: 12rem"></Column>
        <Column field="movimientos" header="Locacion" sortable style="min-width: 8rem"></Column>
        <Column field="telefono" header="Ciudad" sortable style="min-width: 10rem"></Column>
        <Column field="telefono" header="Latitud" sortable style="min-width: 10rem"></Column>
        <Column field="telefono" header="Longitud" sortable style="min-width: 10rem"></Column>
        <Column field="fechaCreacion" header="Tipo ubicación" sortable style="min-width: 10rem"></Column>
        <Column header="Acciones" style="min-width: 8rem">
          <template #body>
            <Button icon="pi pi-pencil" class="p-button-rounded p-button-info mr-2" />
            <!-- <Button icon="pi pi-eye" class="p-button-rounded p-button-warning mr-2" /> -->
            <Button icon="pi pi-trash" class="p-button-rounded p-button-danger mr-2" />
          </template>
        </Column>
      </DataTable>
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted, reactive } from 'vue'
    import { useToast } from 'primevue/usetoast'
    import { FilterMatchMode } from 'primevue/api'
    import InputText from 'primevue/inputtext';
    import Badge from 'primevue/badge';
    import Avatar from 'primevue/avatar';
    import Menubar from 'primevue/menubar';
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import { ProductService } from '@/services/ProductService';
    import Button from 'primevue/button';
    import Toolbar from 'primevue/toolbar';
    import IconField from 'primevue/iconfield';
    import InputIcon from 'primevue/inputicon';
    import Dialog from 'primevue/dialog';
    import InputMask from 'primevue/inputmask';
    import Toast from 'primevue/toast';


    const toast = useToast()
    const motoristas = ref([])
    const filters = reactive({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    })
    
    onMounted(() => {
        // Aquí deberías cargar los datos reales de los motoristas
        motoristas.value = [
        { motorista: 'Ricardo Motorista', movimientos: 28, telefono: '123-456-7890', vehiculoAsignado: 'TCA01234', fechaCreacion: '30/04/2022', proveedor: 'Transporte' },
        { motorista: 'Douglas Motorista', movimientos: 13, telefono: '098-765-4321', vehiculoAsignado: 'TCB9192', fechaCreacion: '06/10/2021', proveedor: 'Velit voluptate re' },
        { motorista: 'Henry Motorista', movimientos: 37, telefono: '111-222-3333', vehiculoAsignado: '', fechaCreacion: '13/06/2024', proveedor: 'Culpa duis aliqui' },
        { motorista: 'Carlos Motorista', movimientos: 26, telefono: '444-555-6666', vehiculoAsignado: '', fechaCreacion: '01/07/2021', proveedor: 'Cupidatat anim' },
        ]
    })
    
    const openNew = () => {
        // Lógica para abrir el formulario de nuevo motorista
        toast.add({ severity: 'info', summary: 'Nuevo', detail: 'Abriendo formulario de nuevo motorista', life: 3000 })
    }
    
    const exportCSV = () => {
        // Lógica para exportar los datos
        toast.add({ severity: 'success', summary: 'Exportar', detail: 'Datos exportados correctamente', life: 3000 })
    }

  </script>
  
  <style scoped>
  /* Puedes agregar estilos específicos aquí si es necesario */
  </style>