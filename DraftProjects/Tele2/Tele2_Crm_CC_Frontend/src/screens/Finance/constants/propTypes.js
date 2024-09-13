import PropTypes from 'prop-types'

export default {
  getBalance: PropTypes.func,
  getActiveSubscriptions: PropTypes.func,
  getQuantumData: PropTypes.func,
  getRemainsDateilsData: PropTypes.func,
  activeSubscriptionsState: PropTypes.object,
  match: PropTypes.object,
  balanceState: PropTypes.object,
  temporaryPayState: PropTypes.object,
  userState: PropTypes.object,
  contentBalanceState: PropTypes.object,
  handlingId: PropTypes.number,
  personalAccountState: PropTypes.object,
  queryParamsState: PropTypes.object,
  disableService: PropTypes.object,
  changeVisibility: PropTypes.func,
  showServiceHistory: PropTypes.func,
  getServiceHistory: PropTypes.func,
  changeServiceStatus: PropTypes.func,
  unsubscribeSelected: PropTypes.func,
  serviceHistoryState: PropTypes.object,
  subscribers: PropTypes.object,
  changeAbonentsModalVisibility: PropTypes.func,
  location: PropTypes.object,
  history: PropTypes.object,
  remains: PropTypes.object,
  getTemporaryPayNew: PropTypes.func,
  addPayment: PropTypes.func,
  getTrustCreditHistory: PropTypes.func,
  getTrustCreditInfo: PropTypes.func,
  deactivateCreditInfo: PropTypes.func,
  activateCreditInfo: PropTypes.func,
  temporaryPay: PropTypes.object,
  balance: PropTypes.object,
  fetchInvoicesHistory: PropTypes.func,
  changeCompensationsHistoryModalVisibility: PropTypes.func,
  clearCompensationsMessages: PropTypes.func,
  clearValidationMessages: PropTypes.func
}